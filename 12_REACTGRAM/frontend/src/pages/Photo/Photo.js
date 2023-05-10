import "./Photo.css"

import { uploads } from "../../utils/config";

//components
import Mesage from "../../components/Message";
import { Link } from "react-router-dom";
import PhotoItem from "../../components/PhotoItem";

//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";

//redux
import { getPhoto } from "../../slice/photoSlice";


const Photo = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {photo, loading, error, message} = useSelector((state) => state.photo)

    //comentario

    //load photo data
    useEffect(() => {
      dispatch(getPhoto(id));
    }, [dispatch, id]);

    // like e comentario

    if(loading) {
      return <p>Carregando...</p>
    }

  return <div id="photo">

    <PhotoItem photo={photo} />

  </div>

}

export default Photo