import { Img, Name, NameActor } from './CastItem.styled';

export const ActorCard = ({ actor }) => {
  return (
    <>
      <Img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09uJRvSYTZguOy_L--3XALEwxqNIuvBvF8yJOHWNiew&s'
        }
        alt=""
        width={120}
      />
      <NameActor>{actor.name}</NameActor>
      <Name>{actor.character}</Name>
    </>
  );
};
