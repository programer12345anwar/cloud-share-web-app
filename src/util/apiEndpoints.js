const BASE_URL="http://localhost:9000/api/v1.0"

export const apiEndpoints={
    FETCH_FILES:`${BASE_URL}/files/my`,
    TOGGLE_FILE:`${BASE_URL}/files/${id}/toggle-public`
}