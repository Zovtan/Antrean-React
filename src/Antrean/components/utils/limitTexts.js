export const limitAlamat = (alamat) => {
    return [...alamat.slice(0,30), "..."];
}
