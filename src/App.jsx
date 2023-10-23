import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import RQSuperHeroPage from "./components/RQSuperHeroPage";
import ParallelQueriesPage from "./components/ParallelQueriesPage";
import DynamicParallelPage from "./components/DynamicParallelPage";
import DependentQueriesPage from "./components/DependentQueriesPage";
import PaginatedQueriesPage from "./components/PaginatedQueriesPage";
import InfiniteQueriesPage from "./components/InfiniteQueriesPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/super-heroes">Super Heroes Page</Link>
              </li>
              <li>
                <Link to="/rqsuper-heroes">RQ Super Heroes Page</Link>
              </li>
              <li>
                <Link to="/rq-parallel">RQ Parallel Page</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel Page</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Dependent Page</Link>
              </li>
              <li>
                <Link to="/rq-paginated">RQ Paginated Queries Page</Link>
              </li>
              <li>
                <Link to="/rq-infinite-paginated">
                  RQ Inifinite Paginated Queries Page
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
            <Route
              path="/rq-infinite-paginated"
              element={<InfiniteQueriesPage />}
            />
            <Route path="/rq-paginated" element={<PaginatedQueriesPage />} />
            <Route
              path="/rq-dependent"
              element={<DependentQueriesPage email="test@example.com" />}
            />
            <Route
              path="/rq-dynamic-parallel"
              element={<DynamicParallelPage ids={[1, 3]} />}
            />
            <Route path="/rqsuper-heroes/:id" element={<RQSuperHeroPage />} />
            <Route path="/rqsuper-heroes" element={<RQSuperHeroesPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
