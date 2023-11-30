import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import useDBUsers from "../../../Hooks/useDBUsers";
import { useParams } from "react-router-dom";
import UserStats from "./UserStats";
import useSalaries from "../../../Hooks/useSalary";

const UserDetails = () => {
  const [users] = useDBUsers();
  const { id } = useParams();
  const { email } = useParams();
  const [salaries] = useSalaries();

  const findUser = users.find((user) => user._id === id);
  console.log(findUser);

  const userEmail = findUser.email;
  console.log('userDetails Email: ', userEmail); 

  const findUserSalary = salaries.find((salary) => salary.email === email);
  console.log('findUserSalary', findUserSalary);
 


  return (
    <div className="flex items-start justify-evenly gap-12">
      {/* Card */}
      <div>
        <Card className="max-w-xl overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none mx-auto"
          >
            <img
              className="w-72 h-72"
              src={findUser.image}
              alt="Employee Photo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="text-center">
              {findUser.name}
            </Typography>
            <div className="">
            <Typography
              variant="lead"
              color="gray"
              className="font-normal text-center"
            >
              <small>{findUser.designation}</small>
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="font-normal flex justify-center items-center gap-1"
            >
                <span>Salary: </span> <span className="text-lg text-[#0064A5] font-semibold"> {'$ '+findUser.salary}</span>
            </Typography>
            </div>
          </CardBody>
          <CardFooter className="-mt-12 text-center">
            <Typography>
              Email: {findUser.email}
            </Typography>
            
              <Typography>
              {'Phone: '+findUser.phone}
            </Typography>
           
          </CardFooter>
        </Card>
      </div>
      {/* Stats */}
      <div>
        <h2 className="mb-12 text-3xl text-center font-workSans">
            Employee Statistics
            <hr className=" border-light-blue-600 border-2 flex mx-auto w-full rounded mt-2" />
        </h2>
        

        <div>
          <UserStats></UserStats>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
