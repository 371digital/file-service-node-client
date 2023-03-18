export const prepareResponse = (response) => {
    const status = response.data?.code === 200;
    return {
        status: status,
        error: !status ? response.data.message : "",
        data: response.data?.data
    }
}