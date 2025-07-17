import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.BucketV2("primeiro-bucket", {
  bucket: "primeiro-bucket-pulumi",
  tags: {
    IAC: "true",
  },
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "primeiro-ecr",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true",
  },
});

// Export the name of the bucket
export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
