<script>
  import Header from "./components/Header.svelte";
  import TableUsers from "./components/TableUsers.svelte";
  import CreateUser from "./components/CreateUser.svelte";
  import Modal from "./components/Modal.svelte";
  import Popup from "./components/Popup.svelte";
</script>

<main>
  <Header />
  <div id="container">
    <div id="containerHeader">
      <div class="headerNav">
        <h2 class="title">Users</h2>
      </div>
      <div class="headerNav">
        <Modal>
          <Popup btn="newUser" />
        </Modal>
      </div>
    </div>
    <TableUsers />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0;
    background-color: #181a2a;
  }

  /*	CONTAINER	*/
  #container {
    width: 96%;
    height: 100%;
    margin: 2% 0;
    background-color: #2a2b3e;
    border-radius: 10px;
    overflow: hidden;
    color: #a8acbf;
    display: grid;
    grid-template-rows: 80px 1fr;
  }
  #containerHeader {
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    height: 50px;
    background-color: #2a2b3e;
  }
</style>
