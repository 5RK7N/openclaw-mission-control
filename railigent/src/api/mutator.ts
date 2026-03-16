export const customFetch = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  // Use a runtime configurable backend URL.
  // We'll use a placeholder that can be replaced at container startup.
  const baseUrl = (window as any)._env_?.BACKEND_URL || 'http://localhost:8000';

  const response = await fetch(`${baseUrl}${url}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
