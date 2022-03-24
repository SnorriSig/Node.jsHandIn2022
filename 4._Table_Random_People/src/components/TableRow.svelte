<script>
  export let name;
  export let email;
  export let photo;
  let alt = "photo";
</script>


  <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td><img src={photo} alt="Photo of {name} from faker"></td>
  </tr>