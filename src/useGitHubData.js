import axios from "axios";
import { useEffect, useState } from "react";
import { gitHubBase, username } from "./commonValues";

export const useGitHubData = (time) => {
    const [gitHubData, setGithubData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const getGitHubData = async () => {
            try {
                const response = await axios.get(`${gitHubBase}/users/${username}/repos`);
                const data = response.data;

                setGithubData({
                    state: "success",
                    data,
                });

            } catch {
                setGithubData({
                    state: "error",
                });
            }
        };
        setTimeout(getGitHubData, time * 1000);
    }, [time]);

    return gitHubData;
};