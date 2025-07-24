import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
  dynamic: string[];
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  return {
    props: {
      params: context.params?.dynamic, // context.params.dynamic will be an array of segments
    }, // will be passed to the page component as props
  };
};

interface Props {
  params?: string[] | undefined;
}

const CatchAllSegments: FC<Props> = (props) => {
  return (
    <main>
      CATCH-ALL-ROUTING
      <ol>
        {props.params?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </main>
  );
};
export default CatchAllSegments;
