% Rundeck Pro Replication

In order to keep a Rundeck Pro Cluster in sync, we provide plugins to replicate Rundeck state across instances.

## Job Replication Plugin

The Job replication plugin is a SCM Export plugin included with Rundeck Pro. It automatically replicates Job definitions to a secondary Rundeck instance whenever a Job is modified within a project.

Enable the plugin in the SCM section of the Configuration page for a project.

## Execution Replication File Storage Plugin

The Execution Replication File Storage Plugin included with Rundeck Pro creates a Rundeck formatted Project Archive for each execution, and uploads it to a remote
Rundeck server, to replicate the execution data

Enable the plugin in rundeck-config.properties:

    rundeck.execution.logs.fileStoragePlugin=ExecutionReplicationPlugin

Configuration will be defined in framework.properties/project.properties:

    framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.rundeckUrl=http://host
    framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.apiToken=...
    framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.outputDir=/tmp
    framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.project=${execution.project}
    framework.plugin.ExecutionFileStorage.ExecutionReplicationPlugin.timeout=30