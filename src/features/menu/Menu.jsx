import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return <ul>{menu.map()}</ul>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
