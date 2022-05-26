<script>
  import axios from "axios";

  let user = [];

  // Create User
  const CreateUser = () => {
    console.log("Edit user");
    const name = user.name;
    const lastName = user.lastName;
    const password = user.password;
    const email = user.email;
    const gender = user.gender;

    axios
      .post("http://localhost:5000/api/user/create", {
        name,
        lastName,
        password,
        email,
        gender,
      })
      .then((res) => {
        //Rechargement de la page après l'ajout de l'utilisateur.
        window.location.reload();
      })
      .catch((err) => {
        alert("Please complete all fields");
      });
  };
</script>

<h2>Create user</h2>
<form class="contentForm">
  <div class="input">
    <label for="name">Firstname</label>
    <input name="name" type="text" bind:value={user.name} required />
  </div>
  <div class="input">
    <label for="lastname">Lastname</label>
    <input name="lastname" type="text" bind:value={user.lastName} required />
  </div>
  <div class="input">
    <label for="email">E-mail</label>
    <input name="email" type="text" bind:value={user.email} required />
  </div>
  <div class="input">
    <label for="password">Password</label>
    <input
      name="password"
      type="password"
      bind:value={user.password}
      required
    />
  </div>
  <div class="input">
    <label for="gender">Gender</label>
    <select name="gender" bind:value={user.gender} required>
      <option value="h">Men</option>
      <option value="f">women</option>
    </select>
  </div>
  <button
    class="btn new"
    on:click|preventDefault={CreateUser(user)}
    type="submit">Create user</button
  >
</form>

<style>
</style>
