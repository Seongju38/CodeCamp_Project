import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Wrapper, PostWrapper, CommentWrapper } from "../../../styles/boards-[boardId]"

const FETCH_BOARD = gql`
  query {
    fetchBoard(boardId: "6597577b5d6eaa0029f7d558") {
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
    }
  }
`

export default function () {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6597577b5d6eaa0029f7d558" }
  })

  console.log(router)
  console.log(data)

  return (
    <Wrapper>
      <PostWrapper>
        <img src="/images/ic_profile-56px.png"></img>
      </PostWrapper>
      <CommentWrapper>

      </CommentWrapper>
    </Wrapper>
  );
}