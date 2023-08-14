type PlayerProps = {
    params: {
      playerId: string;
    };
  };

const PlayerPage = ({ params }: PlayerProps) => {
  return <div className="m-4 font-bold">Player ID: {params.playerId}</div>;
  };
  
export default PlayerPage;
  