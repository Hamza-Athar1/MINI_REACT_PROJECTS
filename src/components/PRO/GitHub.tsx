import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/animations.css";
function GitHub() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("Ezi0567");

  useEffect(() => {
    if (loading) fetchData();
  }, [loading]);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);

      if (!res.ok) {
        throw new Error("Failed to fetch GitHub data");
      }
      const resdata = await res.json();
      setData(resdata);
      console.log(resdata);
      setLoading(false);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  function load() {
    if (loading) {
      return (
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
    if (error) {
      return (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          {error}
        </p>
      );
    }
    if (data) {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div
            className="container-fluid d-flex flex-column align-items-center justify-content-center"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <h1 className="display-4">{data.name || data.login}</h1>
            <img
              src={data.avatar_url}
              alt={`${data.name || data.login}'s avatar`}
              className="img-thumbnail"
              style={{
                width: "150px",
                borderRadius: "50%",
                marginBottom: "20px",
              }}
            />
            <p className="lead">
              <strong>GitHub Profile:</strong>{" "}
              <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                {data.html_url}
              </a>
            </p>
            <p>
              <strong>Public Repositories:</strong> {data.public_repos}
            </p>
            <p>
              <strong>Followers:</strong> {data.followers}
            </p>
            <p>
              <strong>Following:</strong> {data.following}
            </p>
            {data.bio && (
              <p>
                <strong>Bio:</strong> {data.bio}
              </p>
            )}
            {data.company && (
              <p>
                <strong>Company:</strong> {data.company}
              </p>
            )}
            {data.location && (
              <p>
                <strong>Location:</strong> {data.location}
              </p>
            )}
            {data.blog && (
              <p>
                <strong>Blog:</strong>{" "}
                <a href={data.blog} target="_blank" rel="noopener noreferrer">
                  {data.blog}
                </a>
              </p>
            )}
            {data.twitter_username && (
              <p>
                <strong>Twitter:</strong>{" "}
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{data.twitter_username}
                </a>
              </p>
            )}
            <p>
              <strong>Account Created At:</strong>{" "}
              {new Date(data.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={`fade-in`}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Github Search</h1>
          <p className="lead" style={{ textAlign: "center" }}>
            Search a user by his/her GitHub username
          </p>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <input
          type="text"
          className="inp"
          placeholder="Search User"
          onChange={handleInput}
          style={{ margin: "0px" }}
        />
        <button
          className="bt1"
          onClick={() => setLoading(true)}
          style={{ borderRadius: "50px" }}
        >
          Search
        </button>
      </div>
      <div className="container-fluid">{load()}</div>
    </div>
  );
}
export default GitHub;
