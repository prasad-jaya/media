import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItems from "./AlbumListItems";

const AlbumList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, result ] = useAddAlbumMutation();
    
    const handleAddAlbum = () =>{
        addAlbum(user);
    }

    let content;
    if(isFetching){
        content = <Skeleton className="h-10 w-full" times={3}/>
    }else if (error) {
        content = <div>Error Loading albums.</div>
    } else {
        content = data.map(album =>{
          return <AlbumListItems key={album.id} album={album}/>
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Album for {user.name}</h3>
                <Button loading={result.isLoading} onClick={handleAddAlbum}>
                    +Add Album
                </Button> 
            </div>
            <div>{content}</div>
        </div>
    )
}
export default AlbumList;