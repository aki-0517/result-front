type PlayerProps = {
    params: {
      playerId: string;
    };
  };

const PlayerPage = ({ params }: PlayerProps) => {
    return (
        <div>
       <div>{params.playerId}</div>
      </div>
    );
  };
  
export default PlayerPage;
  