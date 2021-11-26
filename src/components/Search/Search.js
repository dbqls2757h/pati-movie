import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { PageTitle } from "../PageTitle";
import { Container } from "../Container";
import { movieApi } from "../../api";
import { PageNotFound } from "../PageNotFound";
import { Loader } from "../Loader";
import { Link } from "react-router-dom";

const Form = styled.form`
  margin-top: 120px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 60px;
  border: 1px solid #555;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const ConBg = styled.div`
  height: 180px;
`;

const Title = styled.div`
  margin-top: 10px;
`;

export const Search = () => {
  const [search, setSearch] = useState();
  //검색하기를 눌렀을때 로딩이 떠야해서 ()비워둠
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [noSearch, setNoSearch] = useState("");

  //1
  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
    // => 실시간으로 변화를 볼수있음(ex.아이디는 세자리 이상 입력해주세요, 비밀번호 몇글자 이상...)
  });

  // 4
  const onSubmit = async () => {
    const { term } = getValues();
    // console.log(term);

    setLoading(true);

    try {
      // 6
      // api에서 search를 불러와서 매개변수로 term 전달해서 결과값을 콘솔로 찍기

      // 7 콘솔찍으면서 try, catch 작성
      // console.log(await movieApi.search(term));

      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색 결과가 없습니다😥");
      } else {
        // if에서 "내용"을 가졌기 때문에 빈값으로 돌려줘야함
        setNoSearch("");
        setSearch(results);
      }

      // useState에 저장
      // console.log(results);
      setSearch(results);

      setLoading(false);
    } catch (error) {
      // console.log(error);
      setError(true);
    }
  };

  console.log(search);

  //5 api에 변수 저장

  return (
    <div>
      <PageTitle title="영화검색" />

      <Container>
        {/* 3 함수걸기 handleSubmit(매개변수) */}
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* 2 스프레드연산자로 연결 */}
          <Input
            {...register("term", {
              required: "true",
              // 인풋값을 필수로 사용 => 네
            })}
            type="text"
            placeholder="검색..."
          />
        </Form>

        {/* 8 error, loading body작성 */}
        {error ? (
          <PageNotFound />
        ) : (
          <div>
            {loading ? (
              <Loader />
            ) : (
              <ConWrap>
                {noSearch === "" && search ? (
                  search.map((searchData) => (
                    <Link key={searchData.id} to={`/detail/${searchData.id}`}>
                      <Con>
                        <ConBg
                          style={{
                            background: `url(${
                              searchData.backdrop_path
                                ? `https://image.tmdb.org/t/p/original${searchData.backdrop_path}`
                                : `https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=`
                            }) center/cover`,
                          }}
                        />
                        <Title>{searchData.title}</Title>
                      </Con>
                    </Link>
                  ))
                ) : (
                  <h3>{noSearch}</h3>
                )}
              </ConWrap>

              // <ConWrap>
              //   {search &&
              //     search.map((searchData) => (
              //       <Link key={searchData.id} to={`/detail/${searchData.id}`}>
              //         <Con>
              //           <ConBg
              //             style={{
              //               background: `url(${
              //                 searchData.backdrop_path
              //                   ? `https://image.tmdb.org/t/p/original${searchData.backdrop_path}`
              //                   : `https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=`
              //               }) center/cover`,
              //             }}
              //           />
              //           <Title>{searchData.title}</Title>
              //         </Con>
              //       </Link>
              //     ))}
              // </ConWrap>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};
