export const getSiteUrl = (path?: string | null) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const BASE_URL = process.env.NEXT_PUBLIC_CMS_HOST;
    return `${ BASE_URL }${ path }`;
};