import { useState, useEffect } from "react";
import { DataTable } from "../DataTable/DataTable";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/constants";

const Container = () => {
  const [data, setData] = useState<UrlData[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload(true);
  };

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    setData(response.data);
    setReload(false);
  };
  useEffect(() => {
    fetchTableData();
  }, [reload]);
  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable data={data} updateReloadState={updateReloadState} />
    </>
  );
};

export default Container;
