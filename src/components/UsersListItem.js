import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

const UsersListItem = ({user}) =>{
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header =  <> 
                        <Button className="mr-3" loading={isLoading} onClick={handleClick}><GoTrashcan/></Button>
                        {error && <div> Error Deleting User ... </div>}
                        {user.name} 
                    </>

    return(
      <ExpandablePanel header={header}>
           <AlbumList user={user}/>
      </ExpandablePanel>
                  
             
    )

}
export default UsersListItem;