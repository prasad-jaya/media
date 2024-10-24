import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: ' http://localhost:3005'
    }),
    endpoints(builder) {
        return {
           fetchPhotos: builder.query({
            query: (album) =>{
                return {
                    url:'/photos',
                    params: {
                        albumId: album.id
                    },
                    method: 'GET'
                }
            }
           }),
           addPhoto: builder.mutation({
            query: (album) =>{
                return {
                    url: '/photos',
                    body:{
                        albumId: album.id,
                        url: faker.image.abstract(150,150,true)
                    },
                    method: 'POST'
                }
            }
           }),
           removePhoto: builder.mutation({
            query: (album) =>{
                return {
                    url: `/photos/${album.id}`,
                    method: 'DELETE'
                }
            }
           }), 
        }
    }
})

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };