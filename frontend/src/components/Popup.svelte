<script>
  import { getContext } from "svelte";
  import CreateUser from "./CreateUser.svelte";
  import EditUser from "./EditUser.svelte";

  const { open, close } = getContext("simple-modal");

  export let btn;
  export let user;

  const showCreateUser = (btn) => {
    open(CreateUser, {});
  };
  const showEditUser = (btn, user) => {
    open(EditUser, { user: user });
  };

  const hideCreateUser = (btn) => {
    close(CreateUser, {});
  };
  const hideEditUser = (btn, user) => {
    close(EditUser, { user: user });
  };
</script>

{#if btn == "newUser"}
  <button on:click={showCreateUser(btn)} class="btn icon new"
    ><i class="fa-solid fa-plus" />Create User</button
  >
{:else if btn == "editUser"}
  <button on:click={showEditUser(btn, user)} class="btn icon action update"
    ><i class="fa-solid fa-pen" />Edit</button
  >
{:else}
  <p>none</p>
{/if}
