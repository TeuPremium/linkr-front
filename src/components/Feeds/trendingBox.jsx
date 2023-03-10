import { useEffect, useState } from "react"
import styled from "styled-components"
import { TrendingBoxContainer, HeaderTrending, HashtagContainer } from "./styles"
import axios from "axios"
import { Link } from "react-router-dom"

export default function TrendingTags(prop) {


    const url = `http://localhost:5000/rank`

    const [rank, setRank] = useState()

    useEffect(() => {
        const promise = axios.get(url)
        promise.then((res) => setRank(res.data))
        promise.catch((error) => alert('An error occured'))
    }, [])

 


    return (
        <>
            <TrendingBoxContainer>


                <HeaderTrending>
                    <h1>trending</h1>
                </HeaderTrending>

                <HashtagContainer>
                    {rank ? (
                        rank.map((r) => (
                            <Link to={`/hashtag/${r.hashtagName}`} style={{ textDecoration: 'none' }}>
                                <h1># {r.hashtagName}</h1>
                            </Link>
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </HashtagContainer>


            </TrendingBoxContainer>
        </>
    )
}

