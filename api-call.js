const retryFetcher = async function (fetcher, times = 1) {
  try {
    const response = await fetch(fetcher);
    if (!response.ok) {
      throw new Error("fetch failed with status code ${response.status}");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    if (times > 0) {
      retryFetcher(fetcher, times - 1);
    } else {
      console.log("All retry failed!!!");
      throw e;
    }
  }
};

retryFetcher("https://jsonplaceholder.typicode.com/posts/1", 2).then((data) => {
  console.log("final consoel log");
  console.log(data);
});
