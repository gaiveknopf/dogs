import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head";

const UserProfile = () => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title={capitalize(user)} description="Tela do usuário" />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
