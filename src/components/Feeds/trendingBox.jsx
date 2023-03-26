import { useEffect, useState } from "react";
import {
  TrendingBoxContainer,
  HeaderTrending,
  HashtagContainer,
} from "./styles";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TrendingTags(prop) {
  const url = `${process.env.REACT_APP_API_URL}/rank`;

  const [rank, setRank] = useState();

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((res) => setRank(res.data))
        promise.catch((error) => alert('An error occured'))
    }, [])

    return (
      <>
        <TrendingBoxContainer data-test="trending">
          <HeaderTrending>
            <h1>trending</h1>
          </HeaderTrending>
  
          <HashtagContainer>
            {rank ? (
              rank.map((r) => (
                <Link
                  to={`/hashtag/${r.hashtagName}`}
                  style={{ textDecoration: "none" }}
                >
                  <h1 data-test="hashtag"># {r.hashtagName}</h1>
                </Link>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </HashtagContainer>
        </TrendingBoxContainer>
      </>
    );
  }