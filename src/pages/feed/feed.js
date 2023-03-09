import FeedContainer from "../../components/Feeds/feedContainer";
import Header from "../../components/header/header";
import { tokenIsValid } from "../../hooks/auth";

export default function Feed(prop) {
  tokenIsValid();

  return (
    <>
      {/* colocar imagem por prop no header */}
      <Header />
      <FeedContainer timeline={prop.timeline} />
    </>
  );
}
