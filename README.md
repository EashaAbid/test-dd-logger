# DigitalOcean API Call

This is a simple React application that demonstrates making an HTTP call to the DigitalOcean API and handling the response.

## Features

- Makes an HTTP GET request to the DigitalOcean API's `/account` endpoint.
- Logs any non-200 status codes (for demonstration purposes).
- Displays the response message if the HTTP request is successful.
- Displays an error message if the HTTP request fails.

## File Explorer

This app contains the following files of importance.

- `logger.js`: contains logic to log data into `/logs/app/log` file
- `callApi.js`: contains logic to call DigitalOcean API and log the response received
- `/datadog/conf.d/conf.yml`: contains logging configuration to send to Datadog agent

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/datadog-logging-app.git
```

Change into the project directory:

```bash

cd datadog-logging-app
```

Install the dependencies:

```bash
npm install
```

## Usage

To run the application, execute the following command:

```bash
node index.js
```

The application will make an HTTP GET request to the DigitalOcean API and log the results.

## References

This application is referenced in the following articles:

#### Use DataDog to monitor applications on App Platform

In this article, we use this application to demonstrate a simple case of logging. This app is uploaded on DigitalOcean App Platform and the logs App Platform collects of this app are forwarded to DataDog for monitoring.

Follow these steps to deploy this application on App Platform along with DataDog agent.

- Go to DigitalOcean App Platform and click on **Crate App**.

- Under *Service Provider*, select **GitHub** and select the **Repository** that you forked earlier. Click on **Next** > **+ Additional Resource (Optional)**.

- From the list of service providers, select **Docker Hub**. This is where you provide [DataDog agent docker image](https://hub.docker.com/r/datadog/agent). Under *Repository*, mention `datadog/agent`. Click on **Next**.

- On the *Environment Variables* section, click on **Edit** against datadog-agent and add the following key-value pairs. (* marks mandatory variables)

    - *DD_API_KEY: <your-dd-api-key>
    - *DD_SITE: "datadoghq.eu" (replace this with the site allotted to you at the time of DataDog agent installation)
    - *DD_LOGS_ENABLED: true
    - DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL: true
    - DD_CONTAINER_EXCLUDE_LOGS: "name:datadog-agent"

- Save the environment variables, review the deployment and create the app. Building and deploying resources takes a bit of time.

> [Note for the AP team]
> At this stage, DataDog agent deployment fails with the following error:
> ```bash
> [2024-05-22 16:15:38] Error: Error while getting hostname, exiting: unable to reliably determine the host name. You can define one in the agent config file or in your hosts file
> [2024-05-22 16:15:38] failed to clone3: Invalid argument
> [2024-05-22 16:15:38] AGENT EXITED WITH CODE 255, SIGNAL 0, KILLING CONTAINER
> [2024-05-22 16:15:38] 2024-05-22 16:15:38 UTC | SYS-PROBE | INFO | (cmd/system-probe/subcommands/run/command.go:126 in func2) | Received signal 'terminated', shutting down...
> [2024-05-22 16:15:38] failed to clone3: Invalid argument
> [2024-05-22 16:15:38] trace-agent exited with code 256, signal 15, restarting in 2 seconds
> [2024-05-22 16:15:42] failed to clone3: Invalid argument
> [2024-05-22 16:15:42] system-probe exited with code 0, disabling
> [2024-05-22 16:15:42] failed to clone3: Invalid argument
> [2024-05-22 16:15:42] [cont-finish.d] executing container finish scripts...
> [2024-05-22 16:15:42] [cont-finish.d] done.
> [2024-05-22 16:15:42] [s6-finish] waiting for services.
> [2024-05-22 16:15:42] [s6-finish] sending all processes the TERM signal.
> [2024-05-22 16:15:45] [s6-finish] sending all processes the KILL signal and exiting.

