/* eslint-disable react/prop-types */
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;
  const { data: channel } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log(channel.data.courses);

  return (
    <div>
      <h1>Channel Details</h1>
      {channel?.data?.courses.map((course) => {
        return (
          <div key={course}>
            <p>{course}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DependentQueriesPage;
