import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { loadToken } from "../../utils/storage"

const apiProblemOrData = (response) => {
  if (!response.ok) {
    const problem = getGeneralApiProblem(response)
    if (problem) return problem
  }

  return response.data
}

export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.setup()
  }

  setup() {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async login({ username, password }): Promise<any> {
    const response: ApiResponse<any> = await this.apisauce.post(`/user/login`, {
      username,
      password,
    })

    return response.data
  }

  async createAccount({ username, email, password, penisSize, gender }): Promise<any> {
    const response: ApiResponse<any> = await this.apisauce.post(`/user/`, {
      username,
      email,
      password,
      penisSize,
      gender,
    })

    return response.data
  }

  async getMyTracks(): Promise<any> {
    const response: ApiResponse<any> = await this.apisauce.get(
      `/tracks/`,
      {},
      {
        headers: { "Instalk-Token": await loadToken() },
      },
    )

    return apiProblemOrData(response)
  }
}
