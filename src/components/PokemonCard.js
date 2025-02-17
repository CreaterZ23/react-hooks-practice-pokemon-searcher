import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const[isFrontPic, setIsfrontPic] = useState(true)
  function handleImgClick(){
      setIsfrontPic(!isFrontPic)
  }


  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleImgClick} src={isFrontPic ? sprites.front: sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
