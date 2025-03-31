import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  
export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl:process.env.REACT_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes:[
        "User",
        "Products",
        "Customers",
        "Transaction",
        "Sales",
        "Admin",
        "Performance",
    ],
    endpoints:(builder)=>({
        getUser: builder.query({
            query: (id)=>`general/user/${id}`,
            providesTags:["User"],
        }),
        getProducts: builder.query({
            query: ()=>'client/products',
            providesTags:["Products"]
        }),
        getCustomers: builder.query({
            query: ()=>'client/customers',
            providesTags:["Customers"]
        }),
        getTarsaction: builder.query({
            query:({page,pageSize,sort,search})=>({
                url: "client/transaction",
                method: "GET",
                params: { page, pageSize, sort, search},
            }),
            providesTags:["Transaction"]
        }),getSales: builder.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
          }),
          getAdmin:builder.query({
            query:()=>`management/admins`,
            providesTags:["Admin"]
          }),
          getUserPerformance: builder.query({
            query: (id) => `management/performance/${id}`,
            providesTags: ["Performance"],
          }),
          getDashboard: builder.query({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"],
          }),

    }),
})

export const {useGetUserQuery,useGetProductsQuery,useGetCustomersQuery,useGetTarsactionQuery,useGetSalesQuery,useGetAdminQuery,useGetUserPerformanceQuery,useGetDashboardQuery}=api;
