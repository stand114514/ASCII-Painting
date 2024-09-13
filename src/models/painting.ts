interface Painting{
    id: number,
    name: string,
    content: string,
    time: string,
    author_id: number,
    favorite_num: number,
    like_num: number,
    state: number //0：未审核，1：通过，2：未通过
}