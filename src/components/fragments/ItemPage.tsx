import React, { useEffect } from "react";
import { useItem } from "../../hooks";

export default function Home() {
  const { isError, handleFetchList, isFetching, list, message } = useItem();

  // const [name, setName] = useState()

  useEffect(() => {
    handleFetchList({ page: 1,});
  }, []);

  if (isFetching) {
    return <p>Loading</p>;
  }
  if (isError) {
    return <p>{message}</p>;
  }
  let ListItem = [];
  ListItem = list.map((item: any, key: number) => {
    return (
      <tr key={key}>
        <th>{item.id}</th>
        <th>{item.name}</th>
      </tr>
    );
  });
  return (
    <div>
      <div>Trang Home</div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{ListItem}</tbody>
      </table>
    </div>
  );
}
