<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { fade } from "svelte/transition";
  import Modal from "./Modal.svelte";
  import Popup from "./Popup.svelte";

  //Get all users
  let users;
  onMount(async () => {
    await fetch(`http://localhost:5000/api/user/getAll`)
      .then((r) => r.json())
      .then((data) => {
        users = data;
      });
  });

  //Delete user
  function handleClick(user) {
    axios
      .delete("http://localhost:5000/api/user/delete" + user._id, {})
      .then((res) => {
        console.log(res.data.message);
        users = users.filter((value) => value !== user);
      })
      .catch((err) => console.log(err));
  }
</script>

<div class="tbl-header">
  <table cellpadding="0" cellspacing="0" border="0">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>E-mail</th>
        <th>Gender</th>
        <th class="tbl-edit">Edit</th>
        <th class="tbl-delete">Delete</th>
      </tr>
    </thead>
  </table>
</div>
<div class="tbl-content">
  <table cellpadding="0" cellspacing="0" border="0">
    <tbody>
      {#if users}
        {#each users as user (user._id)}
          <tr class="user {user._id}" transition:fade>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            {#if user.gender == "h"}
              <td>Man</td>
            {:else if user.gender == "f"}
              <td>Women</td>
            {:else}
              <td>Error</td>
            {/if}

            <td class="tbl-edit">
              <Modal>
                <Popup btn="editUser" {user} />
              </Modal>
            </td>
            <td class="tbl-delete">
              <button
                class="btn action delete"
                on:click|preventDefault={handleClick(user)}
                ><i class="fa-solid fa-trash" /></button
              >
            </td>
          </tr>
        {/each}
      {:else}
        <p class="loading">loading...</p>
      {/if}
    </tbody>
  </table>
</div>

<style>
  /*	TABLEAU	*/
  table {
    width: 100%;
    padding: 0 2%;
    table-layout: fixed;
  }

  .tbl-content {
    overflow-x: auto;
    margin-top: 0px;
    border: 0;
  }

  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 600;
    font-size: 0.9em;
    color: #fff;
    text-transform: uppercase;
  }

  td {
    padding: 15px;
    text-align: left;
    font-weight: 300;
    font-size: 0.9em;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }

  td.tbl-delete,
  th.tbl-delete {
    width: 5%;
  }

  td.tbl-edit,
  th.tbl-edit {
    width: 10%;
  }

  tr.user {
    transition: all 0.2s ease-in-out;
  }

  tr.user:hover {
    background-color: #3e3e58;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
</style>
