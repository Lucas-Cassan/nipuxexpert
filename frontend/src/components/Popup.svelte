<script>
  import { getContext } from "svelte";
  import CreateUser from "./CreateUser.svelte";
  import EditUser from "./CreateUser.svelte";

  const { open } = getContext("simple-modal");
  export let btn;
  const showCreateUser = (btn) => {
    open(CreateUser, { message: "Create new user !" });
  };
  const showEditUser = (btn) => {
    open(EditUser, { message: "Edit user !" });
  };
</script>

{#if btn == "newUser"}
  <button on:click={showCreateUser} class="btn icon new"
    ><i class="fa-solid fa-plus" />Create User</button
  >
{:else if btn == "editUser"}
  <button on:click={showEditUser} class="btn icon action update"
    ><i class="fa-solid fa-pen" />Edit</button
  >
{:else}
  <p>none</p>
{/if}
