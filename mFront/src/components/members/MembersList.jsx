import { useState, useEffect } from 'react';
import { backURL } from '../../lib/constants';
import { Link } from 'react-router-dom';


const MembersList = () => {
  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMembers = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${backURL}/members?page=${page}&limit=${limit}`);
      if (response.ok) {
        const data = await response.json();
        setMembers(data.members);
        setTotal(data.total);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to fetch members.');
      }
    } catch (err) {
      setError('An error occurred while fetching members.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [page, limit]);

  const handleNextPage = () => {
    if (page * limit < total) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="w-96 mx-auto mt-20">
      <div className=" flex justify-between">
        <h2 className="text-center p-4 font-extrabold text-xl">Members List</h2>
        <Link to='/addMember'><div className="btn">Add</div></Link>
        
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          <div className="overflow-x-auto min-w-96">
            <table className="table table-fixed w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th className='text-center'>Role</th>
                </tr>
              </thead>
            </table>
          </div>

          {members.map((member, idx) => (
            <div key={idx} className="overflow-x-auto cursor-pointer">
              <table className="table table-fixed w-full">
                <tbody>
                  {/* row 1 */}
                  <tr className="hover text-left">
                    <th className="w-1/12 ">{idx + 1}</th>
                    <td className="w-1/12">{member.name}</td>
                    <td className="w-1/12">{member.phone}</td>
                    <td className="w-1/12 text-center"> {member?.role ? member.role.toUpperCase() : "Member"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}

          <div className="mt-4 flex justify-between">
            <button
              className="btn"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>
              Page {page} of {Math.ceil(total / limit)}
            </span>
            <button
              className="btn"
              onClick={handleNextPage}
              disabled={page * limit >= total}
            >
              Next
            </button>
          </div>
        </>
      )
      }
    </div >
  );
};

export default MembersList;
