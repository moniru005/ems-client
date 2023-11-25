import useDBUsers from "../../../Hooks/useDBUsers";
import { Card, Typography } from "@material-tailwind/react";

const AllUsers = () => {

    const [users] = useDBUsers();
 


    return (
        <div className="border-2  font-workSans">
            <table className="">
                <thead className="bg-[#0064A5] text-sm text-white font medium">
                    <tr className="p-4 flex flex-row lg:gap-24 justify-evenly ">
                        <th>SL</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="p-4 flex flex-row lg:gap-24 justify-evenly ">
                        <td>SL</td>
                        <td>Photo</td>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                </tbody>
            </table>

            
        </div>
    );
};

export default AllUsers;