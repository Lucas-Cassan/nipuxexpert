<script>
  import axios from "axios";

  export let user;

  const EditUser = (user) => {
    console.log("Edit user");
    const userId = user._id;
    const name = user.name;
    const lastName = user.lastName;
    const email = user.email;
    const gender = user.gender;

    axios
      .get("http://localhost:5000/api/user/update" + userId, {
        userId,
        name,
        lastName,
        email,
        gender,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
</script>

<h2>Edit user</h2>
<form class="contentForm">
  <div class="input">
    <label for="name">Firstname</label>
    <input name="name" type="text" bind:value={user.name} />
  </div>
  <div class="input">
    <label for="lastname">Lastname</label>
    <input name="lastname" type="text" bind:value={user.lastName} />
  </div>
  <div class="input">
    <label for="email">E-mail</label>
    <input name="email" type="email" bind:value={user.email} />
  </div>
  <div class="input">
    <label for="gender">Gender</label>
    <select name="gender" bind:value={user.gender}>
      <option value="h">Man</option>
      <option value="f">women</option>
    </select>
  </div>

  <button
    class="btn update"
    on:click|preventDefault={EditUser(user)}
    type="submit">Confirmer</button
  >
</form>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
  }
  .content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
</style>
