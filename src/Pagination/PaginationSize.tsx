import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Params } from "react-router-dom";

type Props = {
    totalNumOfPages: number
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}



export default function PaginationSize({ setPageNumber, totalNumOfPages }: Props) {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    return (
        <Stack spacing={2}>
            <Pagination
                color='standard'
                count={totalNumOfPages}
                size="large"
                onChange={handleChange}
            />
        </Stack>
    );
}