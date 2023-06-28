import {useLoaderData as useRouterLoaderData} from 'react-router-dom'

export const useLoaderData = <T>() => useRouterLoaderData() as unknown as T | undefined
