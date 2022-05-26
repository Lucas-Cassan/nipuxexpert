<script>
  // create a prop
  export let user;
</script>

<tr class="user">
  <td>{user.name}</td>
  <td>{user.lastName}</td>
  <td>{user.email}</td>
  <td>{user.gender}</td>
  <td class="tbl-edit"
    ><button value={user._id} class="btn icon action update"
      ><i class="fa-solid fa-pen" /> Edit</button
    ></td
  >
  <td class="tbl-delete"
    ><button value={user._id} class="btn action delete"
      ><i class="fa-solid fa-trash" /></button
    ></td
  >
</tr>
