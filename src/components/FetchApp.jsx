import { useEffect } from "react";
import { useFetch } from "../Hoocks/useFetch"

export const FetchApp = () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    const { data, isLoading, error, fetchData } = useFetch();

    useEffect(() => {
        fetchData(url, 'GET')
    }, [])



    return (
        <>
            <h1>USUARIOS</h1>
            {isLoading ? <h4>cargando...</h4>
                : error ? <h4>error: {error}</h4>
                    : <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map(elem => {

                                    return (
                                        <tr key={elem.id}>
                                            <th scope="row">{elem.id}</th>
                                            <td>{elem.name}</td>
                                            <td>{elem.email}</td>
                                            <td>{elem.website}</td>
                                        </tr>

                                    )


                                })
                            }

                        </tbody>
                    </table>
            }
        </>
    )
}
