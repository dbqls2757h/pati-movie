import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { PageNotFound } from "../PageNotFound";
// import { useLocatin } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container } from "../Container";
import { Loader } from "../Loader";

const Img = styled.div`
  width: 50%;
  height: 80vh;
`;

const ConWrap = styled.div`
  width: 50%;
`;

const Title = styled.div``;

const Sub = styled.li``;

const Desc = styled.div``;

export const Detail = () => {
  // const location = useLocation();
  // console.log(location);

  // const history = useHistory();

  const { id } = useParams();
  // console.log(id);

  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);
  // error false

  useEffect(() => {
    const movieDetail = async () => {
      try {
        // console.log(await movieApi.detail(19404));
        const { data } = await movieApi.detail(id);
        // console.log(data);
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        // console.log(error);
        <PageNotFound />;
        // setError(true)
      }
    };
    movieDetail();
  }, []);

  console.log(movieData);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        movieData && (
          <>
            <PageTitle title="영화리뷰" />
            <Container>
              <Img
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.poster})`,
                }}
              ></Img>
              <ConWrap>
                <Title></Title>
                <Sub>{movieData.genres.map((genre) => genre.name + ",")}</Sub>
                <Desc></Desc>
              </ConWrap>
            </Container>
          </>
        )
      )}
      {/* -movie detail design => 디자인 새로 해보기
        -이미지 ""값일 떄 없다고 표현? useImage? => no Iamge 넣어주기 
        setImage(이미지주소) */}

      {/* {errorPage ? <PageNotFound/> : <>안에넣기</>} */}
    </div>
  );
};
