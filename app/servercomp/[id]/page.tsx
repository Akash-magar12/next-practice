const page = async (props) => {
  const { id } = await props.params;
  console.log(id);
  return <div>{id}</div>;
};

export default page;
