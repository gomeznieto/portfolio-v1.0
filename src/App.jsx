import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Main from "./layout/Main";
import DynamicSectionPage from "./page/DynamicSectionPage";
import ProjectProvider from "./content/ProjectProvider";
import BlogProvider from "./content/BlogProvider";
import ModeProvider from "./content/ModeProvider";
import ProfileProvider from "./content/profileProvider";
("./content/ProfileProvider");
import NotFound from "./page/NotFound";
import FormatProvider from "./content/FormatProvider";
import PostProvider from "./content/PostProvider";
import DynamicPostPage from "./page/DynamicPostPage";
import HomeProvider from "./content/HomeProvider";

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <ModeProvider>
        <FormatProvider>
          <PostProvider>
            <HomeProvider>
              <ProjectProvider>
                <BlogProvider>
                  <ProfileProvider>
                    <Routes>
                      <Route path="/" element={<Main />}>
                        <Route path="*" element={<NotFound />} />
                        <Route index element={<Home />} />
                        <Route
                          path="/:dynamicSection"
                          element={<DynamicSectionPage />}
                        />
                        <Route
                          path="/:dynamicSection/:id"
                          element={<DynamicPostPage />}
                        />
                      </Route>
                    </Routes>
                  </ProfileProvider>
                </BlogProvider>
              </ProjectProvider>
            </HomeProvider>
          </PostProvider>
        </FormatProvider>
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
