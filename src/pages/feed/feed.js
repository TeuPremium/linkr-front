import FeedContainer from "../../components/Feeds/feedContainer";
import Header from "../../components/header/header";

export default function Feed() {
  return (
    <>
      {/* colocar imagem por prop no header */}
      <Header />
      <FeedContainer />
    </>
  );
}
