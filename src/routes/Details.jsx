import { useLoaderData } from "react-router-dom";

const Details = () => {
  const {response} = useLoaderData();
  console.log(response);
  return (
    <div>
      {response[0].name}
    </div>
  );
};

export default Details;