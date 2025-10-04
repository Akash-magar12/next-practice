interface ProfileProps {
  profile: {
    name: string;
    age: number;
    city: string;
  };
}

const Profile = ({ profile }: ProfileProps) => {
  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>{profile.age}</h2>
      <p>{profile.city}</p>
    </div>
  );
};

export default Profile;
