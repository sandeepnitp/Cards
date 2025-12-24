import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://thumbs.dreamstime.com/b/meta-logo-facebook-rebrand-concept-icon-blue-color-social-media-new-name-kyiv-ukraine-october-233509972.jpg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iFHbEoFtF9sDdXZY2PaV-b316qAn00J03SLek7F40g&s",
      companyName: "Google",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$80/hour",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xn4VdcDBtm4nTvIn5oIoLUwXxBINd7WezLUbx1y9VA&s",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "Cupertino, USA",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Motion Designer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$85/hour",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTWlnJCnn2ljYqv2t4XY9bM5U4pnohvXZRw&s",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJaZNzxWO-Iu5GyLyVImO7ro6wAdhLfK-D_a9CwQPIg&s",
      companyName: "Tesla",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$68/hour",
      location: "Austin, USA",
    },
    {
      brandLogo:
        "https://substackcdn.com/image/fetch/$s_!aFzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa27a43b7-f1ec-4586-9898-5f43c9b7cdbf_1000x1000.jpeg",
      companyName: "IBM",
      datePosted: "3 weeks ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "10 weeks ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Redwood City, USA",
    },
    {
      brandLogo:
        "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
      companyName: "Adobe",
      datePosted: "6 days ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$78/hour",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem) {
        return (
          <Card
            company={elem.companyName}
            post={elem.post}
            datePosted={elem.datePosted}
            location={elem.location}
            pay={elem.pay}
            brandLogo={elem.brandLogo}
            tag1={elem.tag1}
            tag2={elem.tag2}
          />
        );
      })};
    </div>
  );
};

export default App;
